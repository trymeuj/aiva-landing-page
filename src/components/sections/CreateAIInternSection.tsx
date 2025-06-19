import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './CreateAIInternSection.module.css';

// Typewriter animation component
function Typewriter({ text, speed = 18, onDone }: { text: string, speed?: number, onDone?: () => void }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    let cancelled = false;
    function type() {
      if (cancelled) return;
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        setTimeout(type, speed);
      } else if (onDone) {
        onDone();
      }
    }
    type();
    return () => { cancelled = true; };
  }, [text, speed, onDone]);
  return <span>{displayed}</span>;
}

const panels = [
  {
    key: 'role',
    heading: "1. What's the role of your AI Intern?",
    subtext: (
      <>
        Just like hiring someone for a job, you tell us what this intern is for.<br />
        Could be &quot;Marketing Intern&quot;, &quot;Invoice Assistant&quot;, or &quot;Sales Rep&quot;.
      </>
    ),
    note: 'The agent will specialize in this role, learn over time, and own that function.',
    visual: (
      <>
        <div className={styles.inputLabel}>What are you hiring this agent for?</div>
        <div className={styles.typewriter}>
          <Typewriter text="To help me manage my sales data pipeline" speed={16} />
        </div>
        <div className={styles.inputLabel}>Any custom instructions?</div>
        <div className={styles.typewriter}>
          <Typewriter text={`I store my prospect data in a sheet called &quot;Prospects&quot;. I reference this to manage my sales pipeline.`} speed={16} />
        </div>
      </>
    ),
  },
  {
    key: 'tools',
    heading: '2. Choose what tools they can use',
    subtext: (
      <>
        Just like giving your real intern access to Gmail or Excel —<br />
        you choose which apps they can use.<br />
        We support 100+ tools like Slack, Notion, Drive, Sheets, CRMs and more.
      </>
    ),
    visual: (
      <>
        <div className={styles.inputLabel}>Connected Tools</div>
        <div className={styles.toolsGrid}>
          <div className={styles.toolCard + ' ' + styles.active}>✅ Google Sheets</div>
          <div className={styles.toolCard + ' ' + styles.active}>✅ Gmail</div>
          <div className={styles.toolCard + ' ' + styles.active}>✅ Notion</div>
          <div className={styles.toolCard + ' ' + styles.addMore}>➕ Add More</div>
        </div>
      </>
    ),
  },
  {
    key: 'tasks',
    heading: '3. Assign tasks, naturally',
    subtext: (
      <>
        Your AI Intern is ready. Just talk to it.<br />
        &quot;Send weekly report to my email&quot; or &quot;Update today&apos;s leads in the CRM&quot;<br />
        No coding. No forms. It listens, executes, and remembers.
      </>
    ),
    note: 'Like a real intern — it keeps a task list, reports back, and improves.',
    visual: (
      <>
        <div className={styles.inputLabel}>Current Tasks</div>
        <div className={styles.dashboardCard}>
          <div className={styles.taskCard}><span>📈</span> <Typewriter text="Post Weekly Summary to Slack" speed={16} /> <span className={styles.statusSuccess}>Success</span></div>
          <div className={styles.taskCard}><span>📊</span> <Typewriter text="Update CRM with new leads" speed={16} /> <span className={styles.statusRunning}>Running</span></div>
          <div className={styles.taskCard}><span>🧾</span> <Typewriter text="Extract Invoice from Email" speed={16} /> <span className={styles.statusScheduled}>Scheduled</span></div>
        </div>
        <div className={styles.inputLabel}>Memory</div>
        <div className={styles.typewriter}><Typewriter text="Enabled ✅" speed={16} /></div>
      </>
    ),
  },
];

export default function CreateAIInternSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll snap logic for manual navigation
  const handleDotClick = (idx: number) => {
    setActive(idx);
    sectionRef.current?.scrollTo({
      left: idx * sectionRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  // Sync active panel on scroll
  const handleScroll = () => {
    if (!sectionRef.current) return;
    const idx = Math.round(
      sectionRef.current.scrollLeft / sectionRef.current.offsetWidth
    );
    setActive(idx);
  };

  // Hijack vertical scroll to horizontal when hovering over slider
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (sectionRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      sectionRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <section className={styles.sectionRoot}>
      <div className={styles.dotNav}>
        {panels.map((_, i) => (
          <button
            key={i}
            className={i === active ? styles.dotActive : styles.dot}
            aria-label={`Go to step ${i + 1}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
      <div
        className={styles.slider}
        ref={sectionRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
      >
        {panels.map((panel, i) => (
          <motion.div
            className={styles.panel}
            key={panel.key}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: active === i ? 0 : 100, opacity: active === i ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          >
            <div className={styles.panelContent}>
              <div className={styles.textBlock}>
                <h3>{panel.heading}</h3>
                <div className={styles.subtext}>{panel.subtext}</div>
                {panel.note && <div className={styles.note}>{panel.note}</div>}
              </div>
              <div className={styles.visualBlock}>
                <div className={styles.rightCard}>
                  {panel.visual}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Mail, Calendar } from "lucide-react";

interface WaitlistEntry {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface WaitlistResponse {
  data: WaitlistEntry[];
  pagination: {
    current: number;
    total: number;
    count: number;
    totalEntries: number;
  };
}

export default function AdminWaitlistPage() {
  const [waitlistData, setWaitlistData] = useState<WaitlistResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchWaitlistData = async (page: number = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/waitlist?page=${page}&limit=20`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch waitlist data');
      }

      const data = await response.json();
      setWaitlistData(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to load waitlist data');
      console.error('Error fetching waitlist data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWaitlistData(currentPage);
  }, [currentPage]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const downloadCSV = () => {
    if (!waitlistData?.data) return;

    const csvContent = [
      ['Name', 'Email', 'Date Joined'],
      ...waitlistData.data.map(entry => [
        entry.name,
        entry.email,
        formatDate(entry.createdAt)
      ])
    ]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aiva-waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900/20 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                AIVA Waitlist Admin
              </h1>
              <p className="text-gray-300">
                Manage and view waitlist registrations
              </p>
            </div>
            
            {waitlistData && (
              <button
                onClick={downloadCSV}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Export CSV
              </button>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        {waitlistData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-blue-900/30 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-gray-400 text-sm">Total Signups</p>
                  <p className="text-2xl font-bold text-white">{waitlistData.pagination.totalEntries}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-blue-900/30 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3">
                <Mail className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-gray-400 text-sm">This Page</p>
                  <p className="text-2xl font-bold text-white">{waitlistData.pagination.count}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-blue-900/30 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Total Pages</p>
                  <p className="text-2xl font-bold text-white">{waitlistData.pagination.total}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-blue-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-300">Loading waitlist data...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={() => fetchWaitlistData(currentPage)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Retry
              </button>
            </div>
          ) : waitlistData && waitlistData.data.length > 0 ? (
            <>
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Name/Company</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Date Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {waitlistData.data.map((entry, index) => (
                      <tr key={entry._id} className="hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4 text-white">{entry.name}</td>
                        <td className="px-6 py-4 text-gray-300">{entry.email}</td>
                        <td className="px-6 py-4 text-gray-400">{formatDate(entry.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {waitlistData.pagination.total > 1 && (
                <div className="p-6 border-t border-gray-700/50 flex items-center justify-between">
                  <p className="text-gray-400 text-sm">
                    Showing {((currentPage - 1) * 20) + 1} to {Math.min(currentPage * 20, waitlistData.pagination.totalEntries)} of {waitlistData.pagination.totalEntries} entries
                  </p>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                    >
                      Previous
                    </button>
                    
                    <span className="px-3 py-1 text-gray-300">
                      Page {currentPage} of {waitlistData.pagination.total}
                    </span>
                    
                    <button
                      onClick={() => setCurrentPage(p => Math.min(waitlistData.pagination.total, p + 1))}
                      disabled={currentPage === waitlistData.pagination.total}
                      className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="p-8 text-center">
              <Users className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-300">No waitlist entries yet</p>
              <p className="text-gray-500 text-sm mt-2">Entries will appear here as users sign up</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
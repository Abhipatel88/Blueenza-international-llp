
import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalEmails: 0,
    totalQuotes: 0,
    totalContacts: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentEmails, setRecentEmails] = useState<any[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin/login");
        return;
      }
      
      const headers = { Authorization: `Bearer ${token}` };
      
      try {
        // Fetch dashboard stats
        const statsRes = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/stats`, { headers });
        
        // Fetch recent quotes and contacts for emails section
        const [quotesRes, contactsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/quotes`, { headers }),
          fetch(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/contacts`, { headers })
        ]);
        
        // Check for auth errors
        if (statsRes.status === 401 || quotesRes.status === 401 || contactsRes.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          return;
        }
        
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(prev => ({
            ...prev,
            totalEmails: statsData.totalemail || 0,
            totalQuotes: statsData.totalQuotes || 0,
            totalContacts: statsData.totalContacts || 0
          }));
        }
        
        // Process quotes and contacts to create recent emails list
        let quotes = [];
        let contacts = [];
        
        if (quotesRes.ok) quotes = await quotesRes.json();
        if (contactsRes.ok) contacts = await contactsRes.json();
        
        // Combine and format quotes and contacts as emails
        const combinedEmails = [
          ...quotes.map((q: any) => ({
            id: q.id,
            type: "quote",
            from: q.email,
            name: q.fullName,
            subject: `Quote Request: ${q.product || 'Product'}`,
            message: `Quantity: ${q.quantity || 'N/A'}`,
            time: new Date(q.createdAt),
            status: q.status
          })),
          ...contacts.map((c: any) => ({
            id: c.id,
            type: "contact",
            from: c.email,
            name: c.fullName,
            subject: c.subject || "Contact Inquiry",
            message: c.message?.substring(0, 100) + (c.message?.length > 100 ? '...' : ''),
            time: new Date(c.createdAt),
            status: c.status
          }))
        ];
        
        // Sort by date (newest first) and take only the 5 most recent
        const sortedEmails = combinedEmails
          .sort((a, b) => b.time.getTime() - a.time.getTime())
          .slice(0, 5);
          
        setRecentEmails(sortedEmails);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        toast({ title: "Error", description: "Failed to load dashboard data", variant: "destructive" });
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [toast, navigate]);

  // Format date to relative time (e.g., "2 hours ago")
  const getRelativeTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
      return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
    } else if (diffHours > 0) {
      return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
    } else if (diffMins > 0) {
      return diffMins === 1 ? "1 minute ago" : `${diffMins} minutes ago`;
    } else {
      return "Just now";
    }
  };
  
  // Navigate to emails page
  const viewAllEmails = () => {
    navigate("/admin/emails");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Emails</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-2xl font-bold">...</div>
              ) : (
                <>
                  <div className="text-2xl font-bold">{stats.totalEmails}</div>
                  <p className="text-xs text-muted-foreground">
                    Total messages received
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quotes Generated</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-2xl font-bold">...</div>
              ) : (
                <>
                  <div className="text-2xl font-bold">{stats.totalQuotes}</div>
                  <p className="text-xs text-muted-foreground">
                    Total quote requests
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-2xl font-bold">...</div>
              ) : (
                <>
                  <div className="text-2xl font-bold">{stats.totalContacts}</div>
                  <p className="text-xs text-muted-foreground">
                    Total contact messages
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Emails */}
        <Card>
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Recent Emails</CardTitle>
              <CardDescription>Latest inquiries and quote requests</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={viewAllEmails}>
              View All
            </Button>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading recent emails...</div>
            ) : recentEmails.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No recent emails found
              </div>
            ) : (
              <div className="space-y-4">
                {recentEmails.map((email, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                       onClick={() => navigate('/admin/emails')}>
                    <div className="flex-shrink-0">
                      {email.type === "contact" && <Mail className="w-5 h-5 text-blue-500" />}
                      {email.type === "quote" && <FileText className="w-5 h-5 text-green-500" />}
                    </div>
                    <div className="flex-grow min-w-0"> {/* min-width prevents overflow */}
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">{email.name} <span className="text-gray-500 font-normal hidden sm:inline">({email.from})</span></p>
                        <Badge variant={email.status === 'new' ? 'destructive' : 'outline'} className="flex-shrink-0">
                          {email.status === 'new' ? 'New' : 'Processed'}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-gray-800 mt-1 truncate">{email.subject}</p>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{email.message}</p>
                      <p className="text-xs text-gray-500 mt-2">{getRelativeTime(email.time)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

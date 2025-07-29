
import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import AuthGuard from "@/components/admin/AuthGuard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Reply, Search, Archive, Trash2, Star, Eye, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminEmails = () => {
  const [quotes, setQuotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewItem, setViewItem] = useState<any>(null);
  const [viewType, setViewType] = useState<'quote' | 'contact' | null>(null);
  const { toast } = useToast();
  
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        window.location.href = "/admin/login";
        return;
      }
      
      const headers = { Authorization: `Bearer ${token}` };
      
      try {
        const [quotesRes, contactsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/quotes`, { headers }),
          fetch(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/contacts`, { headers })
        ]);
        
        // Check for auth errors
        if (quotesRes.status === 401 || contactsRes.status === 401) {
          localStorage.removeItem("adminToken");
          window.location.href = "/admin/login";
          return;
        }
        
        if (quotesRes.ok) setQuotes(await quotesRes.json());
        if (contactsRes.ok) setContacts(await contactsRes.json());
      } catch (error) {
        console.error("Failed to fetch data:", error);
        toast({ title: "Error", description: "Failed to load messages", variant: "destructive" });
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [toast]);
  
  // View item details
  const viewDetails = async (type: 'quotes' | 'contacts', id: string) => {
    console.log(`Viewing ${type} with ID: ${id}`);
    const token = localStorage.getItem("adminToken");
    try {
      // For quotes and contacts that already have all data, just set the item directly
      if (type === 'quotes') {
        const quote = quotes.find((q: any) => q.id === id);
        if (quote) {
          setViewItem(quote);
          setViewType('quote');
          return;
        }
      } else if (type === 'contacts') {
        const contact = contacts.find((c: any) => c.id === id);
        if (contact) {
          setViewItem(contact);
          setViewType('contact');
          return;
        }
      }
      
      // If we couldn't find the item in our state, fetch it from the API
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/${type}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setViewItem(data);
        setViewType(type === 'quotes' ? 'quote' : 'contact');
      } else if (response.status === 401) {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
      }
    } catch (error) {
      console.error("Failed to fetch item:", error);
      toast({ title: "Error", description: "Failed to load details", variant: "destructive" });
    }
  };
  
  // Delete item
  const deleteItem = async (type: 'quotes' | 'contacts', id: string) => {
    if (!confirm(`Are you sure you want to delete this ${type === 'quotes' ? 'quote' : 'contact'}?`)) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/${type}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        toast({ title: "Deleted", description: `Item deleted successfully` });
        // Refresh data
        if (type === 'quotes') {
          setQuotes(quotes.filter(q => q.id !== id));
        } else {
          setContacts(contacts.filter(c => c.id !== id));
        }
      } else if (response.status === 401) {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete item", variant: "destructive" });
    }
  };
  
  // Dummy emails for UI structure
  const [emails, setEmails] = useState([
    {
      id: 1,
      from: "john.doe@tradingco.com",
      subject: "Inquiry about Premium Rice Export",
      preview: "We are interested in importing premium basmati rice for our European markets...",
      time: "2 hours ago",
      read: false,
      starred: false,
      category: "inquiry"
    },
    {
      id: 2,
      from: "sarah.wilson@globalfood.com",
      subject: "Quote Request for Wheat Flour",
      preview: "Could you please provide a quote for 500 tons of wheat flour...",
      time: "5 hours ago",
      read: true,
      starred: true,
      category: "quote"
    },
    {
      id: 3,
      from: "michael.chen@asiaimports.com",
      subject: "Partnership Opportunity",
      preview: "We would like to discuss a long-term partnership for oil seeds supply...",
      time: "1 day ago",
      read: false,
      starred: false,
      category: "partnership"
    },
    {
      id: 4,
      from: "ahmed.hassan@middleeasttrading.com",
      subject: "Bulk Order for Lentils",
      preview: "We need to place a bulk order for various types of lentils...",
      time: "2 days ago",
      read: true,
      starred: false,
      category: "order"
    }
  ]);

  const [selectedEmail, setSelectedEmail] = useState<any>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleReply = (email: any) => {
    setSelectedEmail(email);
    setReplyMessage(`Dear ${email.from.split('@')[0]},\n\nThank you for your inquiry regarding ${email.subject.toLowerCase()}.\n\nWe appreciate your interest in Bluenza International LLP. Our team will review your requirements and provide you with a comprehensive response within 24 hours.\n\nBest regards,\nBluenza International LLP Team`);
  };

  const sendReply = () => {
    // In a real app, this would send the email
    alert(`Reply sent to ${selectedEmail.from}`);
    setSelectedEmail(null);
    setReplyMessage("");
  };

  const toggleStar = (emailId: number) => {
    setEmails(emails.map(email => 
      email.id === emailId ? { ...email, starred: !email.starred } : email
    ));
  };

  const markAsRead = (emailId: number) => {
    setEmails(emails.map(email => 
      email.id === emailId ? { ...email, read: true } : email
    ));
  };

  const filteredEmails = emails.filter(email =>
    email.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryBadge = (category: string) => {
    const colors = {
      inquiry: "bg-blue-100 text-blue-800",
      quote: "bg-green-100 text-green-800",
      partnership: "bg-purple-100 text-purple-800",
      order: "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <AuthGuard>
      <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Email Management</h1>
            <p className="text-gray-600">Manage and respond to customer inquiries</p>
          </div>
          <Badge variant="destructive" className="px-3 py-1">
            {emails.filter(e => !e.read).length} Unread
          </Badge>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search emails..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Contacts List */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Messages</CardTitle>
            <CardDescription>Messages from the contact form</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : contacts.length === 0 ? (
              <div className="text-center py-4">No contact messages found</div>
            ) : (
              <div className="space-y-4">
                {contacts.map((contact: any) => (
                  <div
                    key={contact.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="font-medium truncate">{contact.fullName}</span>
                          <Badge className="bg-blue-100 text-blue-800">
                            {contact.subject || "Contact"}
                          </Badge>
                        </div>
                        <h3 className="font-medium mb-1 truncate">{contact.email}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {contact.message?.substring(0, 100)}...
                        </p>
                        <span className="text-xs text-gray-500">
                          {new Date(contact.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => viewDetails('contacts', contact.id)}
                          className="flex-1 sm:flex-none"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteItem('contacts', contact.id)}
                          className="flex-1 sm:flex-none"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Quotes List */}
        <Card>
          <CardHeader>
            <CardTitle>Quote Requests</CardTitle>
            <CardDescription>Requests from the quote form</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : quotes.length === 0 ? (
              <div className="text-center py-4">No quote requests found</div>
            ) : (
              <div className="space-y-4">
                {quotes.map((quote: any) => (
                  <div
                    key={quote.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="font-medium truncate">{quote.fullName}</span>
                          <Badge className="bg-green-100 text-green-800">
                            {quote.product || "Quote"}
                          </Badge>
                        </div>
                        <h3 className="font-medium mb-1 truncate">{quote.email}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Quantity: {quote.quantity}
                        </p>
                        <span className="text-xs text-gray-500">
                          {new Date(quote.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => viewDetails('quotes', quote.id)}
                          className="flex-1 sm:flex-none"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteItem('quotes', quote.id)}
                          className="flex-1 sm:flex-none"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* View Modal */}
        {viewItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-poppins font-bold text-2xl text-gray-900">
                    {viewType === 'quote' ? 'Quote Details' : 'Contact Details'}
                  </h2>
                  <button onClick={() => { setViewItem(null); setViewType(null); }} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {viewType === 'quote' ? (
                    <>
                      <div><strong>Name:</strong> {viewItem.fullName}</div>
                      <div><strong>Email:</strong> {viewItem.email}</div>
                      <div><strong>Phone:</strong> {viewItem.phoneNumber}</div>
                      <div><strong>Company:</strong> {viewItem.companyName}</div>
                      <div><strong>Product:</strong> {viewItem.product}</div>
                      <div><strong>Quantity:</strong> {viewItem.quantity}</div>
                      <div><strong>Requirements:</strong> {viewItem.additionalRequirements}</div>
                      <div><strong>Date:</strong> {new Date(viewItem.createdAt).toLocaleString()}</div>
                    </>
                  ) : (
                    <>
                      <div><strong>Name:</strong> {viewItem.fullName}</div>
                      <div><strong>Email:</strong> {viewItem.email}</div>
                      <div><strong>Phone:</strong> {viewItem.phoneNumber}</div>
                      <div><strong>Company:</strong> {viewItem.companyName}</div>
                      <div><strong>Subject:</strong> {viewItem.subject}</div>
                      <div><strong>Message:</strong> {viewItem.message}</div>
                      <div><strong>Date:</strong> {new Date(viewItem.createdAt).toLocaleString()}</div>
                    </>
                  )}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button 
                    variant="destructive" 
                    onClick={() => {
                      deleteItem(viewType === 'quote' ? 'quotes' : 'contacts', viewItem.id);
                      setViewItem(null);
                      setViewType(null);
                    }}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </AdminLayout>
    </AuthGuard>
  );
};

export default AdminEmails;

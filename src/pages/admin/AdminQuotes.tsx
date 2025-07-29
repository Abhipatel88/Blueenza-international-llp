import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Plus, Trash2, Send } from "lucide-react";

const AdminQuotes = () => {
  const [quotes, setQuotes] = useState([
    {
      id: "QT-2024-001",
      client: "ABC Trading Co.",
      date: "2024-01-15",
      total: "$125,000",
      status: "sent",
      items: 3
    },
    {
      id: "QT-2024-002",
      client: "Global Foods Ltd.",
      date: "2024-01-14",
      total: "$89,500",
      status: "draft",
      items: 2
    }
  ]);

  const [newQuote, setNewQuote] = useState({
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    items: [{ product: "", quantity: "", unit: "", price: "", total: 0 }],
    notes: "",
    validUntil: ""
  });

  const [showNewQuoteForm, setShowNewQuoteForm] = useState(false);

  const products = [
    "Premium Basmati Rice",
    "Wheat Flour",
    "Yellow Corn",
    "Soybeans",
    "Sunflower Oil",
    "Red Lentils",
    "Chickpeas",
    "Black Pepper",
    "Turmeric Powder",
    "Cardamom"
  ];

  const addItem = () => {
    setNewQuote(prev => ({
      ...prev,
      items: [...prev.items, { product: "", quantity: "", unit: "", price: "", total: 0 }]
    }));
  };

  const removeItem = (index: number) => {
    setNewQuote(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const updateItem = (index: number, field: string, value: string) => {
    setNewQuote(prev => {
      const updatedItems = [...prev.items];
      updatedItems[index] = { ...updatedItems[index], [field]: value };
      
      // Calculate total for the item
      if (field === "quantity" || field === "price") {
        const quantity = parseFloat(updatedItems[index].quantity) || 0;
        const price = parseFloat(updatedItems[index].price) || 0;
        updatedItems[index].total = quantity * price;
      }
      
      return { ...prev, items: updatedItems };
    });
  };

  const calculateGrandTotal = () => {
    return newQuote.items.reduce((sum, item) => sum + (item.total || 0), 0);
  };

  const generateQuotePDF = (quote: any) => {
    // In a real app, this would generate and download a PDF
    alert(`Generating PDF for quote ${quote.id || 'new quote'}...`);
  };

  const sendQuote = (quote: any) => {
    // In a real app, this would email the quote to the client
    alert(`Sending quote ${quote.id || 'new quote'} to client...`);
  };

  const saveQuote = () => {
    const quoteId = `QT-2024-${String(quotes.length + 1).padStart(3, '0')}`;
    const newQuoteData = {
      id: quoteId,
      client: newQuote.clientName,
      date: new Date().toISOString().split('T')[0],
      total: `$${calculateGrandTotal().toLocaleString()}`,
      status: "draft",
      items: newQuote.items.length
    };
    
    setQuotes(prev => [...prev, newQuoteData]);
    setNewQuote({
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      items: [{ product: "", quantity: "", unit: "", price: "", total: 0 }],
      notes: "",
      validUntil: ""
    });
    setShowNewQuoteForm(false);
    alert(`Quote ${quoteId} saved successfully!`);
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      draft: "bg-yellow-100 text-yellow-800",
      sent: "bg-blue-100 text-blue-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800"
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Quote Management</h1>
            <p className="text-gray-600">Create and manage product quotes for clients</p>
          </div>
          <Button onClick={() => setShowNewQuoteForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            New Quote
          </Button>
        </div>

        {/* New Quote Form */}
        {showNewQuoteForm && (
          <Card>
            <CardHeader>
              <CardTitle>Create New Quote</CardTitle>
              <CardDescription>Generate a professional quote for your client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Client Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clientName">Client Name</Label>
                  <Input
                    id="clientName"
                    value={newQuote.clientName}
                    onChange={(e) => setNewQuote(prev => ({ ...prev, clientName: e.target.value }))}
                    placeholder="Enter client name"
                  />
                </div>
                <div>
                  <Label htmlFor="clientEmail">Client Email</Label>
                  <Input
                    id="clientEmail"
                    type="email"
                    value={newQuote.clientEmail}
                    onChange={(e) => setNewQuote(prev => ({ ...prev, clientEmail: e.target.value }))}
                    placeholder="client@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="clientAddress">Client Address</Label>
                  <Textarea
                    id="clientAddress"
                    value={newQuote.clientAddress}
                    onChange={(e) => setNewQuote(prev => ({ ...prev, clientAddress: e.target.value }))}
                    placeholder="Enter client address"
                    rows={2}
                  />
                </div>
              </div>

              {/* Quote Items */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Label>Quote Items</Label>
                  <Button variant="outline" size="sm" onClick={addItem}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add Item
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {newQuote.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 border rounded-lg">
                      <div className="md:col-span-2">
                        <Label>Product</Label>
                        <Select onValueChange={(value) => updateItem(index, "product", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product} value={product}>{product}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Quantity</Label>
                        <Input
                          type="number"
                          placeholder="0"
                          value={item.quantity}
                          onChange={(e) => updateItem(index, "quantity", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Unit</Label>
                        <Select onValueChange={(value) => updateItem(index, "unit", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kg</SelectItem>
                            <SelectItem value="ton">Ton</SelectItem>
                            <SelectItem value="mt">MT</SelectItem>
                            <SelectItem value="lbs">Lbs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Price (USD)</Label>
                        <Input
                          type="number"
                          placeholder="0.00"
                          value={item.price}
                          onChange={(e) => updateItem(index, "price", e.target.value)}
                        />
                      </div>
                      <div className="flex items-end space-x-2">
                        <div className="flex-grow">
                          <Label>Total</Label>
                          <div className="h-10 px-3 py-2 border rounded-md bg-gray-50 flex items-center">
                            ${(item.total || 0).toFixed(2)}
                          </div>
                        </div>
                        {newQuote.items.length > 1 && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeItem(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Grand Total:</span>
                    <span>${calculateGrandTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="validUntil">Valid Until</Label>
                  <Input
                    id="validUntil"
                    type="date"
                    value={newQuote.validUntil}
                    onChange={(e) => setNewQuote(prev => ({ ...prev, validUntil: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={newQuote.notes}
                    onChange={(e) => setNewQuote(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Additional terms and conditions"
                    rows={3}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowNewQuoteForm(false)}>
                  Cancel
                </Button>
                <Button variant="outline" onClick={() => generateQuotePDF(newQuote)}>
                  <Download className="w-4 h-4 mr-2" />
                  Generate PDF
                </Button>
                <Button onClick={saveQuote}>
                  Save Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Existing Quotes */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Quotes</CardTitle>
            <CardDescription>Manage your generated quotes</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quote ID</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotes.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell className="font-medium">{quote.id}</TableCell>
                    <TableCell>{quote.client}</TableCell>
                    <TableCell>{quote.date}</TableCell>
                    <TableCell>{quote.items}</TableCell>
                    <TableCell>{quote.total}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(quote.status)}>
                        {quote.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => generateQuotePDF(quote)}>
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => sendQuote(quote)}>
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminQuotes;

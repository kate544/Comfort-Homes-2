import React, { useState } from 'react';
import axios from 'axios';
import './MpesaPayment.css'; 


const MpesaPayment = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [receipt, setReceipt] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        let formattedPhone = phone.trim();
        if (formattedPhone.startsWith('0')) {
            formattedPhone = '254' + formattedPhone.substring(1);
        }

       try {
    const response = await axios.post('https://comforthomes-payment.onrender.com/api/mpesa/stkpush', {
    phone: formattedPhone,
    amount: parseInt(amount, 10), 
});
            if (response.data.ResponseCode === "0") {
                setMessage('Prompt sent! Enter PIN on your phone.');
            } else {
                setMessage(`Error: ${response.data.CustomerMessage || 'Check number.'}`);
            }
        } catch (error) {
            console.error("Connection Error:", error); 
            setMessage('Backend server not responding. (Check if node server.js is running)');
        } finally {
            setLoading(false);
        }
    };

    const handleFastReceipt = () => {
        if (!phone || !amount) {
            setMessage("Please enter a phone number and amount first!");
            return;
        }
        
        setReceipt({
            transactionId: "CH" + Math.random().toString(36).substr(2, 9).toUpperCase(),
            amount: amount,
            phone: phone,
            date: new Date().toLocaleString()
        });
    };

    return (
        <div className="payment-container">
            <h2>Pay for ComfortHomes Booking</h2>
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0712345678"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Amount (KES)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="100"
                        required
                    />
                </div>
                
<div className="button-group">
    <button type="submit" disabled={loading} className="pay-button">
        {loading ? 'Sending Prompt...' : '1. Send M-Pesa Prompt'}
    </button>

    <button 
        type="button" 
        className="generate-receipt-btn"
        onClick={handleFastReceipt}
    >
        2. Generate Receipt
    </button>
</div>          
            </form>

            {message && <p className="message-status">{message}</p>}

            {/* RECEIPT POPUP MODAL */}
            {receipt && (
                <div className="receipt-overlay">
                    <div className="receipt-modal">
                        <h3>✅ Payment Successful!</h3>
                        <p>Your booking with <strong>ComfortHomes</strong> is confirmed.</p>
                        <hr />
                        <div className="receipt-details">
                            <p><strong>Receipt No:</strong> {receipt.transactionId}</p>
                            <p><strong>Amount:</strong> KES {receipt.amount}</p>
                            <p><strong>Phone:</strong> {receipt.phone}</p>
                            <p><strong>Date:</strong> {receipt.date}</p>
                        </div>
                        <hr />
                        <div className="receipt-actions">
                            <button className="download-btn" onClick={() => window.print()}>
                                Print / Save PDF
                            </button>
                            <button className="close-btn" onClick={() => setReceipt(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MpesaPayment;
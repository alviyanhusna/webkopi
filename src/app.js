document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'torabika', img: '1.jpeg', price: 20000 },
            { id: 2, name: 'nescaffe', img: '2.jpg', price: 25000 },
            { id: 3, name: 'kapal api', img: '3.jpeg', price: 40000 },
            { id: 4, name: 'good day', img: '4.jpg', price: 30000 },
            { id: 5, name: 'abc', img: '5.jpg', price: 25000 },
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        selected_item: null,
        detail(item = null) {
            document.getElementById('item-detail-modal').style.display = item ? 'flex' : 'none';
            this.selected_item = item;
        },
        add(newItem) {
            // cek apahah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika kosong / belum ada
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            }
            else {
                // jika barang sudah ada, cek apakah barang beda atau sama di cart
                this.items = this.items.map((item) => {
                    // juka barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }

            document.getElementById('item-detail-modal').style.display = 'none';
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id === id);

            // jika barang lebih dari 1
            if (cartItem.quantity > 1) {
                // telusuri satu2
                this.items = this.items.map((item) => {
                    // jika bukan barang yang di klik
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                // jika barang sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });

});


// konversi rupiah

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};
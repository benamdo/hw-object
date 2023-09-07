function createPhone() {
    // Get input values
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const price = parseFloat(document.getElementById("price").value);
    const storage = parseInt(document.getElementById("storage").value);
    const color = document.getElementById("color").value;

    // Create a phone object
    const phone = {
        Brand: brand,
        Model: model,
        Price: price,
        Storage_GB: storage,
        Color: color,
    };

    // Display phone details
    const phoneDetailsElement = document.getElementById("phone-details");
    phoneDetailsElement.innerHTML = `
        <h2>Phone Details:</h2>
        <table>
            <tr>
                <th>Attribute</th>
                <th>Value</th>
            </tr>
            ${Object.entries(phone)
                .map(([key, value]) => `
                    <tr>
                        <td>${key.replace(/_/g, ' ')}</td>
                        <td>${value}</td>
                    </tr>
                `)
                .join('')}
        </table>
    `;
}

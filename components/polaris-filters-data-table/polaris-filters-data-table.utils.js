export function disambiguateLabel(key, value) {
    switch (key) {
        case "vendor":
            return value.join(", ");
        case "availability":
            return value.map((val) => `Available on ${val}`).join(", ");
        case "productType":
            return value.join(", ");
        default:
            return value;
    }
}

export function isEmpty(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    } else {
        return value === "" || value == null;
    }
}


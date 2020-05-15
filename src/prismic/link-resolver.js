export default function (doc) {
    if (doc.type === 'sound') {
        return '/sound/' + doc.id;
    }

    // Default to the root
    return '/';
}

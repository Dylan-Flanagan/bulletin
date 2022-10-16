export function renderPost(post) {
    const li = document.createElement('li');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const span = document.createElement('span');
    span.textContent = getCategoryEmoji(post.category);

    const desc = document.createElement('p');
    desc.textContent = post.description;

    const img = document.createElement('img');
    img.src = post.image_url;

    const contact = document.createElement('p');
    contact.textContent = post.contact;

    li.append(h2, span, desc, img, contact);
    return li;
}

function getCategoryEmoji(category) {
    if (category === 'entertainment') return '📺';
    if (category === 'for-sale') return '🤑';
    if (category === 'events') return '🎭';
    if (category === 'news') return '🗞';
}

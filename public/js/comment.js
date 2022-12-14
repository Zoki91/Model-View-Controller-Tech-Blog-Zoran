// Home Work - Mini Project 28 & Term 2 Project 

async function commentFormHandler(event) {
  event.preventDefault();

  const text = document.querySelector('textarea[name="enterComment"]').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.enterComment').addEventListener('submit', commentFormHandler);
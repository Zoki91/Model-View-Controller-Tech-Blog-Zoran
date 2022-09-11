// Home Work - Mini Project 28 & Term 2 Project 

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="titleUpdate"]').value;
  const text = document.querySelector('input[name="contentUpdate"]').value
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          text
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
}

document.querySelector('.PostEditForm').addEventListener('submit', editFormHandler);
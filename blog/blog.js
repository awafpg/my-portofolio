// buat variabel untuk menampung data blog
let blogs = []; // array kosong

// function : untuk membuat suatu fungsi atau perintah
function addBlog(event) {
  // event.preventDefault() : untuk mencegah halaman ter refresh saat dijalankan(post dipencet)
  event.preventDefault();
  // tampung data dari input user yang ada di form pake DOM
  let title = document.getElementById("input-blog-title").value;
  let description = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");
  console.log("~ addBlog ~ sebelum image:", image);

  image = URL.createObjectURL(image.files[0]);
  console.log("~ addBlog ~ sesudah image:", image);

  //   data object
  const blog = {
    blogTitle: title,
    blogContent: description,
    blogImage: image,
  };

  //   push: method array untuk nambahin data ke dalam array
  blogs.push(blog);

  console.log(blogs);

  // jalankan function render
  renderBlog();
}

// fungsi untuk menyisipkan data baru ke HTML
function renderBlog() {
  // akses dulu element dengan id content nya
  let contentContainer = document.getElementById("contents");

  //   sisipkan elemen HTML
  contentContainer.innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
    <div class="blog-list-item">
          <div class="blog-image">
            <img
              src="${blogs[i].blogImage}"
              alt="blog-image"
            />
          </div>
          <div class="blog-content">
            <h2>${blogs[i].blogTitle}</h2>
            <span class="detail-blog">17 Des 2024 09:00 | Author</span>
            <p>
              ${blogs[i].blogContent}
            </p>
          </div>
        </div>
    `;
  }
}

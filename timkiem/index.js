const show_search_advance = () => {
  // Lấy thẻ a và category
  let a = document.getElementById('show_search_advance');
  let tr = document.getElementById('search_advance');
  let p = document.getElementById('news');

  // Lấy nội dung của thẻ a
  let text = a.innerHTML;

  // Kiểm tra xử lý hiển thị và ẩn + đổi nội dung thẻ a
  if (text == 'Tìm kiếm nâng cao') {
    tr.style.display = "table-row";
    a.innerHTML = "Bỏ tìm kiếm nâng cao";
    p.innerHTML = "PHP và Javascript là ngôn ngữ lập trình"
  }
  else {
    tr.style.display = "none";
    a.innerHTML = "Tìm kiếm nâng cao";
    p.innerHTML = ""
  }
}

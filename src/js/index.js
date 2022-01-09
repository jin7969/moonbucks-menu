// 메뉴 추가
// 메뉴이름을 서밋하여 리스트에 추가할 수 있다
// 빈값은 입력할 수 없다
// 입력된 메뉴에 수정, 삭제 버튼이 만들어진다

const $ = (select) => document.querySelector(select);

function App() {
  const menuListItem = (name) => {
    return `
    <li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${name}</span>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
    </li>
    `;
  };

  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const menuName = $("#espresso-menu-name").value;

    if (menuName === "") {
      return;
    }

    $("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      menuListItem(menuName)
    );
    $("#espresso-menu-name").value = "";
  });

  $("#espresso-menu-submit-button").addEventListener("click", () => {
    console.log("o");
  });
}

App();

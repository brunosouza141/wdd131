const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.nav-list')

const li = document.createElement('li');
const deleteButton = document.createElement('button');
let chaptersArray = getChapterList()  || [];

function displayList(item){
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
});
};
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
};

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
};

button.addEventListener('click', function() {
  if (input.value.trim() !== ''){
    displayList(input.value.trim());
    chaptersArray.push(input.value.trim());
    setChapterList();
    input.value = '';
    input.focus();
  }
});

// deleteButton.addEventListener('click', function () {
//   list.removeChild(li);
//   input.focus();
//   input.value = '';
// });

chaptersArray.forEach(chapter => {
  displayList(chapter);
});
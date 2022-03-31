자식 레포지터리...는 두 개 있는데   
부모 레포지터리가 없어서..

1. 일단 부모에 해당되는 디렉토리에서 git init을 실행했다.
2. README.me를 생성했다.
3. git add README.md
4. git commit -m "init"

여기까지는 일단 기본 git init 과정.

5. git submodule add ./react-course
6. git submodule add ./react-meetup

submodule 두 개를 추가했고, .gitmodules 라는 파일이 생겼다.   
.gitmodules 파일 및 하위 폴더 두 개가 Staged Changes에 올라갔다.

7. git status를 한 결과   
   new file: .gitmodules   
   net file: react-course   
   new file: react-meetup   

8. git commit -m "add 2 submodules"   
[main 75de4b6] add 2 submodules   
 3 files changed, 8 insertions(+)   
 create mode 100644 .gitmodules   
 create mode 160000 react-course   
 create mode 160000 react-meetup   

 9. github cli로 repo를 생성하고 push 했더니 submodule 파일은 올라가지 않는다.   
 
 10. submodules 아래 각각의 레포지터리를 모두 github에 생성하고 URL을 따냈다.

 11. submodule 각각의 URL을 변경해주었다.   
 git submodule set-url react-course https://github.com/my-like/react-course.git   
 git submodule set-url react-meetup https://github.com/my-like/react-meetup.git   

 12. 변경사항을 commit하고 다시 push 해본다..
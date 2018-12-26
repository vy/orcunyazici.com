Start Web Server
----------------

1. Run "Git Bash"
2. Browse to sources: `cd ~/Desktop/blog-src`
3. Run web server: `~/AppData/Local/Programs/Python/Python37-32/python -m http.server`
4. Browse to [http://localhost:8000/]

Upload Changes
--------------

1. Run "Git Bash"
2. Browse to sources: `cd ~/Desktop/blog-src`
3. Use the following commands:

```
$ git log -5
$ git status
$ git add FILENAME
$ git commit -a -m "MESSAGE"
$ git push origin gh-pages
$ git pull origin gh-pages
```

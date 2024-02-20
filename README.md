This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To compile grammars

Comand to compile grammars from project's root:

```bash
antlr4 -Dlanguage=JavaScript -o ./src/grammar -visitor -no-listener ./grammar/GoScript.g4

```

First, run the development server:

```bash
npm run dev

```


Everything will work on [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Help

Antlr4 official page [here](https://www.antlr.org/download.html)

JavaSKD can also be found [here](https://www.antlr.org/download.html) 

Tutorial on how to add to install ANTLR4 [YouTube](https://www.youtube.com/watch?v=pa8qG0I10_I) and [Blog](https://www.javatpoint.com/javac-is-not-recognized#:~:text=javac%20is%20not%20recognized%20is%20an%20error%20occurs%20while%20we,bin%20folder%20of%20the%20JDK.&text=The%20reason%20behind%20to%20occur,to%20the%20System's%20environment%20variable.)

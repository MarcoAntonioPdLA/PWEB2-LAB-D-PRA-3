const fs=require('fs');
const path =require('path');
const express=require('express');
const bp=requier('body-parser');

const MarkdownIt=require('markdown-it');
    md=new MarkdownIt;
const app =express();

app.use(express.static('pub'))
app.use(bp.json())
app.use(bp.urlencoded({
	extended: true
})) 

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
})

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/listarArchivos', (request, response) => {
	fs.readdir(path.resolve(__dirname, 'pub/'), 'utf8',
		(err, data) => {
			if (error) {
				console.error(err)
				response.status(500).json({
					error: 'message'
				})
				return
			}
            console.log(files);
            console.json(files);
			response.json({
				text: data.replace(/\n/g, '<br>')
			})
		})
      //
})

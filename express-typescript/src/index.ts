import express from 'express';
import diaryRouter from './router/diaries';

const app = express();

app.use(express.json())

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('some pindeg here!!')
  console.log('new date' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

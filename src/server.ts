import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    //await mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    // await mongoose.connect('mongodb://username:password@host:port/database?options...');
    await mongoose.connect(config.databaseUrl as string);
    app.listen(process.env.PORT, () => {
      console.log(`Server is Runnnin on  port  ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

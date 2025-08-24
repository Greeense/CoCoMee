import app form './app';

const PORT = process.env.POST || 3000;
app.listen(PORT, () => {
    console.log(`======> SERVER RUNNING ON PORT ${PORT}`);
});
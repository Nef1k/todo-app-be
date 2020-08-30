export default {
    healthCheck: (req: any, res: any) => {
        res.send({
            'status': 'OK'
        });
    }
}

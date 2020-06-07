import NodePersist from 'node-persist';

const ttlMillis = 60000;
const statusStore = NodePersist.create({
    dir: './pages/api/tasks/temp/status',
    ttl: ttlMillis,
});

statusStore.init();
export default statusStore;

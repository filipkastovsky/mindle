import NodePersist from 'node-persist';

const timestampStore = NodePersist.create({
    dir: './pages/api/tasks/temp/ts',
});

timestampStore.init();
export default timestampStore;

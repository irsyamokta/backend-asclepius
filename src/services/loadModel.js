const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    try {
        const model = await tf.loadGraphModel(process.env.MODEL_URL);
        console.log('Model successfully loaded');
        return model;
    } catch (error) {
        console.error('Failed to load model:', error);
        throw new Error('Model could not be loaded');
    }
}

module.exports = loadModel;

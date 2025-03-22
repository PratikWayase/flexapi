const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'order-service',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'order-group' });

const connectKafka = async () => {
  try {
    console.log('Connecting to Kafka...');
    await producer.connect();
    await consumer.connect();
    console.log('Connected to Kafka!');
  } catch (error) {
    console.error('Kafka connection failed:', error);
  }
};

module.exports = { producer, consumer, connectKafka };

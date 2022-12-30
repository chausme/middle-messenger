import chat from './modules/chat'; // single chat module with title and description output

export default () => {
    // @test data i.e. from API
    const chats = [
        { title: 123, desc: 'Lorem' },
        { title: 321, desc: 'Ipsum' },
        { title: 232, desc: 'Idolor' },
    ];

    return `
        <h1>Heads up, this is a chat list</h1>
        <h3>Number of chats is ${chats.length}</h3>
        <div class="chats">
            ${chats.map(item => chat(item)).join('')}
        </div>
    `;
};

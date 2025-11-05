import React from 'react';

const conversations = [
  { id: 1, name: 'Carlos Silva', lastMessage: 'Claro, te envio assim que chegar.', avatar: 'https://i.pravatar.cc/150?u=carlos', active: true },
  { id: 2, name: 'Ana Pereira', lastMessage: 'Vamos nos encontrar amanhã?', avatar: 'https://i.pravatar.cc/150?u=ana', active: false },
  { id: 3, name: 'João Santos', lastMessage: 'Obrigado pela ajuda!', avatar: 'https://i.pravatar.cc/150?u=joao', active: false },
];

const messages = [
    { id: 1, text: 'Oi, tudo bem? Conseguiu ver o documento que enviei?', sender: 'other' },
    { id: 2, text: 'Olá! Vi sim, parece ótimo. Só tenho uma pequena dúvida na seção 3.', sender: 'me' },
    { id: 3, text: 'Sem problemas. Qual é a sua dúvida?', sender: 'other' },
    { id: 4, text: 'É sobre o prazo de entrega. Ele pode ser estendido?', sender: 'me' },
    { id: 5, text: 'Vou verificar com a equipe e te retorno. 👍', sender: 'other' },
];

const MessagesPage: React.FC = () => {
    return (
        <main className="container mx-auto h-[calc(100vh-4rem)] p-4">
            <div className="flex h-full rounded-xl border border-gray-700 bg-gray-800/50 overflow-hidden">
                {/* Conversations List */}
                <div className="w-full md:w-1/3 border-r border-gray-700 flex-col hidden md:flex">
                    <div className="p-4 border-b border-gray-700">
                        <h1 className="text-xl font-bold text-white">Mensagens</h1>
                    </div>
                    <div className="flex-grow overflow-y-auto">
                        {conversations.map(conv => (
                            <div key={conv.id} className={`flex items-center p-4 cursor-pointer transition-colors ${conv.active ? 'bg-gray-700/50' : 'hover:bg-gray-700/30'}`}>
                                <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold text-white">{conv.name}</p>
                                    <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Window */}
                <div className="w-full md:w-2/3 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center p-4 border-b border-gray-700">
                        <img src={conversations[0].avatar} alt={conversations[0].name} className="w-10 h-10 rounded-full mr-4" />
                        <h2 className="font-semibold text-white">{conversations[0].name}</h2>
                    </div>
                    
                    {/* Messages */}
                    <div className="flex-grow p-6 overflow-y-auto space-y-4">
                        {messages.map(msg => (
                            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`px-4 py-2 rounded-2xl max-w-xs md:max-w-md lg:max-w-lg ${msg.sender === 'me' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Input */}
                    <div className="p-4 border-t border-gray-700">
                        <input
                            type="text"
                            placeholder="Digite uma mensagem..."
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MessagesPage;
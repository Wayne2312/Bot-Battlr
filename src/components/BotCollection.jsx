import { useState } from 'react';
import '../index.css'
import BotSpecs from './BotSpecs';

const BotCollection = ({ bots, enlistBot, dischargeBot }) => {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBack = () => {
    setSelectedBot(null);
  };

  if (selectedBot) {
    return (
      <BotSpecs
        bot={selectedBot}
        back={handleBack}
        enlist={() => {
          enlistBot(selectedBot);
          handleBack();
        }}
      />
    );
  }

  return (
    <div className="bot-collection bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 min-h-screen p-8">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        Available Bots
      </h2>
      <div className="bot-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="bot-card bg-gradient-to-b from-indigo-700 to-purple-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 p-4 text-white cursor-pointer relative"
            onClick={() => setSelectedBot(bot)}
          >
            <img
              src={bot.avatar_url}
              alt={bot.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-purple-500 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-center mt-4">{bot.name}</h3>
            <p className="text-center text-sm text-indigo-200 mt-2">
              Class: <span className="font-medium text-white">{bot.bot_class}</span>
            </p>
            <div className="stats mt-4 space-y-1 text-center">
              <p>
                <span className="text-indigo-300">Health:</span>{' '}
                <span className="font-bold">{bot.health}</span>
              </p>
              <p>
                <span className="text-indigo-300">Damage:</span>{' '}
                <span className="font-bold">{bot.damage}</span>
              </p>
              <p>
                <span className="text-indigo-300">Armor:</span>{' '}
                <span className="font-bold">{bot.armor}</span>
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dischargeBot(bot.id);
              }}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-800 text-white text-sm px-2 py-1 rounded shadow-md"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
import '../index.css'

const BotSpecs = ({ bot, back, enlist }) => {
    return (
      <div className="bot-specs bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 min-h-screen flex flex-col items-center justify-center text-white p-8">
        <div className="bot-details bg-gradient-to-b from-indigo-700 to-purple-800 rounded-lg shadow-xl p-6 text-center w-full max-w-md">
          <img
            src={bot.avatar_url}
            alt={bot.name}
            className="w-40 h-40 mx-auto rounded-full border-4 border-purple-500 shadow-lg"
          />
          <h2 className="text-3xl font-extrabold mt-4">{bot.name}</h2>
          <p className="text-indigo-200 mt-2">
            <strong className="text-white">Catchphrase:</strong>{' '}
            <span className="italic">{bot.catchphrase}</span>
          </p>
          <div className="bot-stats mt-6 space-y-2">
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
          <p className="text-indigo-200 mt-4">
            Class: <span className="font-medium text-white">{bot.bot_class}</span>
          </p>
        </div>
  
        <div className="bot-actions mt-8 space-x-4">
          <button
            onClick={back}
            className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Back
          </button>
          <button
            onClick={enlist}
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Enlist
          </button>
        </div>
      </div>
    );
  };
  
  export default BotSpecs;
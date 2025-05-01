import { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';
import './index.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('https://bot-battle-f37w.onrender.com/bots');
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Bots data not found (404). Please check the API URL.');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBots(data);
      } catch (err) {
        console.error('Error fetching bots:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBots();
  }, []);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {
      setBots(bots.filter((bot) => bot.id !== botId));
      setArmy(army.filter((bot) => bot.id !== botId));

      const response = await fetch(`https://bot-battle-f37w.onrender.com/bots/${botId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete bot');
      }
    } catch (err) {
      console.error('Error discharging bot:', err);
      setBots(bots);
      setArmy(army);
    }
  };

  if (loading)
    return (
      <div className="loading flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white text-2xl font-bold">
        Loading bots...
      </div>
    );

  if (error)
    return (
      <div className="error flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-red-400 text-xl font-semibold">
        Error: {error}
      </div>
    );

  return (
    <div className="app bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 min-h-screen text-white">
      <header className="text-center py-8">
        <h1 className="text-5xl font-extrabold">Bot Army</h1>
        <p className="text-indigo-300 text-lg mt-2">Assemble your ultimate bot team!</p>
      </header>
      <main className="p-8 space-y-12">
        <BotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
        <BotCollection bots={bots} enlistBot={enlistBot} dischargeBot={dischargeBot} />
      </main>
    </div>
  );
}

export default App;

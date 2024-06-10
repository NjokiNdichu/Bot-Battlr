import React from 'react';

function BotCard({ bot, onClick, dischargeBot }) {
  const handleDischarge = (e) => {
    e.stopPropagation();
    dischargeBot(bot);
  };

  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <button className="enlist-button" onClick={(e) => { e.stopPropagation(); onClick(bot); }}>Enlist</button>
      <button className="discharge-button" onClick={handleDischarge}>Discharge</button>
      <button className="remove-button" onClick={handleDischarge}>x</button>
    </div>
  );
}

export default BotCard;

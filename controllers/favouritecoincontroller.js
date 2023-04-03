const User=require("../models/userModels");

const favcoinList=async (req, res) => {
    const name = req.body.name;
    try {
      // Find the user by name
      const user = await User.findOne({ name });
  
      // If user doesn't exist, return an error
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Return the user's list of coin IDs
      return res.status(200).json(user.coinid);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  };

const addcoin=async (req, res) => {
    const name=req.body.name;
    coinid = req.body.coinid;
    try {
        // Find the user by name
        const user = await User.findOne({ name });
    
        // If user doesn't exist, return an error
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Append the new coin ID to the user's list
        user.coinid.push(coinid);
        await user.save();
    
        // Return the updated user object
        return res.status(200).json(user);
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
      }
};

const removecoin=async (req, res) => {
    const name=req.body.name;
    const coinid = req.body.coinid;
    try {
        // Find the user by name
        const user = await User.findOne({ name });
    
        // If user doesn't exist, return an error
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Remove the specified coin ID from the user's list
        user.coinid = user.coinid.filter((id) => id !== coinid);
        await user.save();
    
        // Return the updated user object
        return res.status(200).json(user);
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
      }
    };
 
module.exports={favcoinList,addcoin,removecoin};

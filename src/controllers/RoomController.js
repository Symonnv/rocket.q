const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;
    let roomId;
    let isRoom = true;

    while (isRoom) {
      // generate the room number
      for (let index = 0; index < 6; index++) {
        index == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString());
      }

      // check if the room number already exists
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);
      isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId);

      if (!roomsExistIds) {
        // insert the room into the database
        await db.run(`INSERT INTO rooms (
        id,
        pass
      ) VALUES (
        ${Number(roomId)},
        ${pass}
      )`);
      }
    }

    await db.close();

    res.redirect(`/room/${roomId}`);
  },
  open(req, res) {
    const roomId = req.params.room;
    res.render("room", { roomId: roomId });
  }
};

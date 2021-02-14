const SoundPlayer = require("./sound-player");
const SoundPlayerConsumer = require("./sound-player-consumer");
jest.mock("./sound-player");


beforeEach(() => {
  SoundPlayer.mockClear();
})

it("We can check if consumer called the class constructor", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  // 1回呼ばれたって事をテストする
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
})

it('we can check', () => {
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1)

  
  const coolSoundFileNme = 'song.mp3';
  soundPlayerConsumer.paySomethingCool();

  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0]; 
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  

  console.log(mockPlaySoundFile)

  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileNme);
})

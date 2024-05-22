export class PlayManager {

   gameInitialized: boolean = false;

   prepareGame(): void {
      console.log('Game is prepared');
      this.gameInitialized = true;
      console.log('Initialize state:', this.gameInitialized);
   }
}
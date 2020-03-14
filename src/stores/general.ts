import {action, autorun, observable} from "mobx";
import {GuildInfo_guild} from "@generated";
import {ICategory} from "@ui/Sidebar/Channels/categorise";

export class GeneralStore {
  @observable appName = 'WidgetBot';

  @observable needsUpdate: boolean = false;
  @observable loading?: boolean;
  @observable fetchGuild?: Function;
  @observable guild?: GuildInfo_guild;
  @observable channels: ICategory[] = [];

  @observable menuOpen: boolean = false;
  @observable guestEnabled: boolean = false;
  @observable readOnly: boolean = false;

  constructor() {
    autorun(() => {
      if (this.needsUpdate) {
        console.log('raaa')
        console.log(this.fetchGuild)
        this.fetchGuild && this.fetchGuild();
        this.needsUpdate = false;
      }
    })
  }

  @action toggleMenu(res: boolean = this.menuOpen) {
    this.menuOpen = res
  }

  @action toggleGuest(res: boolean = !this.guestEnabled) {
    this.guestEnabled = res;
  }

  @action toggleRead(res: boolean = !this.readOnly) {
    this.readOnly = res;
  }

  @action setGuild(guild: GuildInfo_guild) {
    this.guild = guild
  }
}

// export default new GeneralStore();
export const generalStore = new GeneralStore();

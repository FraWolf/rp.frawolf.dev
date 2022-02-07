export type ConnectionStatus = 'waiting' | 'ready' | 'network_error';

export interface JSONData {
	discordClientId: string;
	richPresence: RichPresence;
}

export interface RichPresence {
	state: string;
	details: string;
	bigImageName: string;
	bigImageText: string;
	smallImageName: string;
	smallImageText: string;
	buttons: Buttons[];
}

export interface Buttons {
	label: string;
	url: string;
}

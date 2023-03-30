interface Action {
    text: String,
    ref: String
}

export class MessageDto {
    text: string;
    actions: Action[];
}
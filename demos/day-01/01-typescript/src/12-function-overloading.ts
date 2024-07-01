// source, onward_date, dest, return_date -> books onward and return journey tickets
// source, dest, onward_return_date -> books onward and return journey ticket for same day

function bookTickets(arg1: string, arg2: string, arg3: Date): void;
function bookTickets(arg1: string, arg2: Date, arg3: string, arg4: Date): void;
function bookTickets(
    source: string,
    arg2: Date | string,
    arg3: Date | string,
    arg4?: Date
) {
    console.log("book tickets");
}

bookTickets("Pune", new Date(), "Mumbai", new Date());

export {};

export { cn } from "cn"
import {format, parseISO} from "date-fns"

export function formatPrice(amount, currency = "INR") {
    const value = Number(amount);

    if (!value) return "Free"

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(value);
}

export function formatEventDate(date){
    const data = parseISO(date);
    
    return format(date,"E, LLL dd,yyyy")
}
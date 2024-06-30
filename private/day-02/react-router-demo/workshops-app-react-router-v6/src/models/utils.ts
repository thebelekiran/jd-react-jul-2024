// https://github.com/remix-run/react-router/discussions/9792
import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<
    ReturnType<TLoaderFn>
> extends Response | infer D
    ? D
    : never;

export type IdParams = {
    id: string;
};

export interface WorkshopDetailsPageLoaderFunctionArgs
    extends Omit<LoaderFunctionArgs, "params"> {
    params: {
        id: string;
    };
}

export interface SessionsListItemLoaderFunctionArgs
    extends Omit<LoaderFunctionArgs, "params"> {
    params: {
        contactId: string;
    };
}

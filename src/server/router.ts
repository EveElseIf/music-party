import { z } from 'zod';
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();
export const appRouter = t.router({
    getUser: t.procedure.input(z.string()).query((opts) => {
        opts.input; // string
        return { id: opts.input, name: 'Bilbo' };
    }),
    createUser: t.procedure
        .input(z.object({ name: z.string().min(5) }))
        .mutation(async (opts) => {
            // use your ORM of choice
            // return await UserModel.create({
            //     data: opts.input,
            // });
            console.log(opts);
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
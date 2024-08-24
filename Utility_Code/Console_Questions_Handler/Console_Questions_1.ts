/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import * as path from "path";
import * as fsPromises from "fs/promises";
import { fileURLToPath } from "url";
import * as readline from "readline";
const f_MyReadLine_Interface: readline.Interface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
//--------------------------------------------------------------------------------------------------------
export async function ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput(
	p_the_Question: string,
	p_validate__IsThe_UserInput_Good: (the_UserInput: string) => Promise<boolean> | boolean,
	p_Function_ToBe_Executed_When_The_UserInput_Is_Bad: (
		the_UserInput: string
	) => Promise<void> | void,
	p_function_ToBe_Executed_When_The_UserInput_Is_Good: (
		the_UserInput: string
	) => Promise<void> | void,
	p_should_I_Close_The_Interface_After_Getting_The_Good_Answer: boolean,
	p_a_ReadLine_Interface: readline.Interface = f_MyReadLine_Interface
): Promise<string> {
	const the_Good_UserInput: string = await new Promise((res) => {
		p_a_ReadLine_Interface.question(p_the_Question, async (c_the_UserInput) => {
			console.log("\x1b[0m");
			let the_Good_UserInput: string;
			//NOTE:- The not needed await here are for the situation if the caller passed async functions
			if (await p_validate__IsThe_UserInput_Good(c_the_UserInput)) {
				await p_function_ToBe_Executed_When_The_UserInput_Is_Good(c_the_UserInput);
				the_Good_UserInput = c_the_UserInput;
			} else {
				await p_Function_ToBe_Executed_When_The_UserInput_Is_Bad(c_the_UserInput);
				the_Good_UserInput =
					await ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput(
						p_the_Question,
						p_validate__IsThe_UserInput_Good,
						p_Function_ToBe_Executed_When_The_UserInput_Is_Bad,
						p_function_ToBe_Executed_When_The_UserInput_Is_Good,
						p_should_I_Close_The_Interface_After_Getting_The_Good_Answer,
						p_a_ReadLine_Interface
					);
			}
			res(the_Good_UserInput);
		});
	});

	if (p_should_I_Close_The_Interface_After_Getting_The_Good_Answer) {
		p_a_ReadLine_Interface.close();
	}
	return the_Good_UserInput;
}
//--------------------------------------------------------------------------------------------------------

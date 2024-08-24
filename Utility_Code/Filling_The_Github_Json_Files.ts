import { Dirent } from "fs";
import * as fsPromises from "fs/promises";
import * as path from "path";
import { ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput } from "./Console_Questions_Handler/Console_Questions_1";

type T_DataObj_Of__One__Post = {
	name_OfThis_Post: string;
	number_OfThis_Post: number;
	the_Relative_Path_OfThe_Top_Post_From_The_PC__V1: string | null;
	the_Url_OfThe_Top_Post_From_Internet_Site_1: string | null;
	the_Url_OfThe_Top_Post_From_Internet_Site_2: string | null;
	is_There_A_Bottom_Post: boolean;
	the_Relative_Path_OfThe_Bottom_Post_From_The_PC__V1: string | null;
	the_Url_OfThe_Bottom_Post_From_Internet_Site_1: string | null;
	the_Url_OfThe_Bottom_Post_From_Internet_Site_2: string | null;
	the_TextContent_OfThe_Button_Show_Bottom_Post: string | null;
};
type T_ObjOf_DataObjs_Of_Posts = {
	[key: string]: T_DataObj_Of__One__Post;
};
type T_The_SubGuidObj_For_Downloading_The_Posts_Data_Files = {
	the_Start_Number_OfThis_Range_Of_Posts: number;
	the_End_Number_OfThis_Range_Of_Posts: number;
	the_Url_OfThis_Posts_Data_File: string;
};
type T_The_TotalGuideObj_For_Downloading_The_Posts_Data_Files = {
	[stringified_Range: string]: T_The_SubGuidObj_For_Downloading_The_Posts_Data_Files;
};
//------------------------------------------
const the_Local_Path_OfThe_Guide_File_InThis_Local_Repo: string = path.join(
	__dirname,
	"../The_Guide_File_For_Downloading_The_Posts_Data-Files.json"
);
// console.log("---------------------------------------------------------");
// console.log("the_Local_Path_OfThe_Guide_File_InThis_Local_Repo = ");
// console.log(the_Local_Path_OfThe_Guide_File_InThis_Local_Repo);
// console.log("---------------------------------------------------------");
//---------------
const forThe_Images___The_Local_Path_ToBe_Replaced_With_The_Github_Path: string = path.join(
	__dirname,
	"../The_Posts"
);

const forThe_Images___The_Github_Path_ToBe_Used_Instead_The_Local_Path: string =
	"https://account_1.com/main/The_Posts";
//---------------
const forThe_Posts_Data_Files___The_Local_Path_ToBe_Replaced_With_The_Github_Path: string =
	path.join(__dirname, "../The_Data_Files");

const forThe_Posts_Data_Files___The_Github_Path_ToBe_Used_Instead_The_Local_Path =
	"https://raw.githubusercontent.com/A-M-Softwares/Tata_Brothers_Posts_Data/main/The_Data_Files";
//---------------
//-------------------------------------------------------------------------------------------------------------
ask_A_Validator_Recursible_Question_And_Return_The_Good_UserInput(
	"Please, enter the path of the target folder :\n",
	async (user_input: string) => {
		return true;
	},
	async (user_input: string) => {
		const red: string = "\x1b[41m"; // Red background
		const reset: string = "\x1b[0m";
		console.log(red + "----------------------------------------" + reset);
		console.log(red + "My_Errors:" + reset);
		console.log(red + "Your input is bad" + reset);
		console.log(red + "----------------------------------------" + reset);
	},
	async (user_input: string) => {
		main(user_input);
	},
	true
).then(() => {
	console.log("The End");
});
//-------------------------------------------------------------------------------------------------------------
async function main(the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned: string): Promise<void> {
	try {
		//----------------------------------
		const the_Full__ObjOf_DataObjs_Of_Posts: T_ObjOf_DataObjs_Of_Posts =
			await scan_A_Folder_And_Give_MeThe_Full__ObjOf_DataObjs_Of_Posts__Of_It(
				the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned
			);
		//----------------------------------
		const the_Name_OfThe_ToBe_Created_Data_File: string =
			the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned
				.replace(path.dirname(the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned), "")
				.replace(/[\/\\]/gi, "");
		try {
			//----------------------------------
			const the_Full_Local_Path_OfThe_ToBe_Created_Date_File: string = path.join(
				__dirname,
				"../The_Data_Files",
				the_Name_OfThe_ToBe_Created_Data_File + ".json"
			);
			//----------------------------------
			await fsPromises.writeFile(
				the_Full_Local_Path_OfThe_ToBe_Created_Date_File,
				JSON.stringify(the_Full__ObjOf_DataObjs_Of_Posts),
				"utf-8"
			);
			//----------------------------------
			const the_Old_Content_OfThe_Guide_File: string | undefined = await fsPromises.readFile(
				the_Local_Path_OfThe_Guide_File_InThis_Local_Repo,
				"utf-8"
			);
			if (the_Old_Content_OfThe_Guide_File) {
				// do nothing for now.
			} else {
				throw new Error(
					" Error_2: The content of the guide file in this local repo is empty or undefined"
				);
			}
			//----------------------------------
			const the_Old_Obj_OfThe__Guide_File: T_The_TotalGuideObj_For_Downloading_The_Posts_Data_Files =
				JSON.parse(the_Old_Content_OfThe_Guide_File);
			if (the_Old_Obj_OfThe__Guide_File) {
				// do nothing for now.
			} else {
				throw new Error(
					" Error_3: The obj of the guide file in this local repo is empty or undefined"
				);
			}
			//----------------------------------
			const arr_OfThe_Posts_Data_Objs: T_DataObj_Of__One__Post[] = Object.values(
				the_Full__ObjOf_DataObjs_Of_Posts
			);
			arr_OfThe_Posts_Data_Objs.sort((obj_1, obj_2) => {
				return obj_1.number_OfThis_Post - obj_2.number_OfThis_Post;
			});
			if (arr_OfThe_Posts_Data_Objs == undefined || arr_OfThe_Posts_Data_Objs.length < 1) {
				throw new Error(" Error_4: arr_OfThe_Posts_Data_Objs is undefined or empty");
			}
			const the_Url_OfThis_Posts_Data_File = the_Full_Local_Path_OfThe_ToBe_Created_Date_File
				.replace(
					forThe_Posts_Data_Files___The_Local_Path_ToBe_Replaced_With_The_Github_Path,
					forThe_Posts_Data_Files___The_Github_Path_ToBe_Used_Instead_The_Local_Path
				)
				.replace(/\\+/gi, "/");
			const new_SubGuidObj_For_Downloading_The_Posts_Data_Files: T_The_SubGuidObj_For_Downloading_The_Posts_Data_Files =
				{
					the_Start_Number_OfThis_Range_Of_Posts:
						arr_OfThe_Posts_Data_Objs[0].number_OfThis_Post,
					the_End_Number_OfThis_Range_Of_Posts:
						arr_OfThe_Posts_Data_Objs[arr_OfThe_Posts_Data_Objs.length - 1]
							.number_OfThis_Post,
					the_Url_OfThis_Posts_Data_File,
				};
			//----------------------------------
			the_Old_Obj_OfThe__Guide_File[the_Name_OfThe_ToBe_Created_Data_File] =
				new_SubGuidObj_For_Downloading_The_Posts_Data_Files;
			//----------------------------------
			await fsPromises.writeFile(
				the_Local_Path_OfThe_Guide_File_InThis_Local_Repo,
				JSON.stringify(the_Old_Obj_OfThe__Guide_File),
				"utf-8"
			);
			const green: string = "\x1b[32m"; // Green background
			const reset: string = "\x1b[0m";
			console.log(green + "----------------------------------------" + reset);
			console.log(green + "Finished Successfully filling the github json files" + reset);
			console.log(green + "----------------------------------------" + reset);
			//----------------------------------
		} catch (err: any) {
			const red: string = "\x1b[41m"; // Red background
			const reset: string = "\x1b[0m";
			console.log(red + "----------------------------------------" + reset);
			console.log(red + "My_Errors:" + reset);
			console.log(red + err.message + reset);
			console.log();
			console.log(red + err.stack + reset);
			console.log(red + "----------------------------------------" + reset);
		}
	} catch (err: any) {
		const red: string = "\x1b[41m"; // Red background
		const reset: string = "\x1b[0m";
		console.log(red + "----------------------------------------" + reset);
		console.log(red + "My_Errors:" + reset);
		console.log(red + err.message + reset);
		console.log();
		console.log(red + err.stack + reset);
		console.log(red + "----------------------------------------" + reset);
	}
}
//-------------------------------------------------------------------------------------------------------------
async function scan_A_Folder_And_Give_MeThe_Full__ObjOf_DataObjs_Of_Posts__Of_It(
	p_the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned: string
): Promise<T_ObjOf_DataObjs_Of_Posts> {
	//---------------------------------------------
	const the_Final_Composed__ObjOf_DataObjs_Of_Posts: T_ObjOf_DataObjs_Of_Posts = {};

	//---------------------------------------
	await $_loop_Inside_The__TargetFolder__And_Fill_The_Combined_Obj(
		p_the_Sanitized_Path_OfThe_TargetFolder_ToBe_Scanned
	);
	//---------------------------------------
	//Warning: the following step is excellent when the provider extensions are not installed yet.
	if (Object.values(the_Final_Composed__ObjOf_DataObjs_Of_Posts).length < 1) {
		return {};
	}

	//---------------------------------------
	return the_Final_Composed__ObjOf_DataObjs_Of_Posts;
	//---------------------------------------------------------------
	async function $_loop_Inside_The__TargetFolder__And_Fill_The_Combined_Obj(
		p_the_Folder_Path: string
	): Promise<boolean> {
		try {
			const arrOfThe_Dirents: Dirent[] = await fsPromises.readdir(p_the_Folder_Path, {
				withFileTypes: true,
			});
			for (let i = 0; i < arrOfThe_Dirents.length; i++) {
				const i_Dirent: Dirent = arrOfThe_Dirents[i];
				const the_Full_Absolute_Path_OfThe__i_Dirent: string = path.join(
					p_the_Folder_Path,
					i_Dirent.name
				);
				if (i_Dirent.isDirectory()) {
					await $_loop_Inside_The__TargetFolder__And_Fill_The_Combined_Obj(
						the_Full_Absolute_Path_OfThe__i_Dirent
					);
				} else {
					const the_Github_Path_OfThe_Image: string =
						the_Full_Absolute_Path_OfThe__i_Dirent
							.replace(
								forThe_Images___The_Local_Path_ToBe_Replaced_With_The_Github_Path,
								forThe_Images___The_Github_Path_ToBe_Used_Instead_The_Local_Path
							)
							.replace(/\\+/gi, "/");
					const the_DataObj_Of__i_Dirent: T_DataObj_Of__One__Post | undefined =
						await compose_A_DataObj_For_A_Post__From_An_Image_Data__Remember_It_Will_Only_Have_PC_Paths_Not_Stringified_Webview_Uris(
							the_Github_Path_OfThe_Image,
							i_Dirent.name
						);
					if (the_DataObj_Of__i_Dirent == undefined) {
						continue;
					}
					insert_The_Data_Of__OnePostDataObj__To_An___ObjOf_DataObjs_Of_Multiple_Posts(
						the_Final_Composed__ObjOf_DataObjs_Of_Posts,
						the_DataObj_Of__i_Dirent
					);
				}
			}
			return true;
		} catch (err: any) {
			return false;
		}
	}
}
//-------------------------------------------------------------------------------------------------------------
async function compose_A_DataObj_For_A_Post__From_An_Image_Data__Remember_It_Will_Only_Have_PC_Paths_Not_Stringified_Webview_Uris(
	the_Github_Path_OfThe_Image: string,
	the_Image_Name_With_Its_Type: string
): Promise<T_DataObj_Of__One__Post | undefined> {
	try {
		const the_Wanted_String_From_The_Image_Name: string | undefined =
			the_Image_Name_With_Its_Type.match(/post_No_.+?\./gi)?.[0];
		if (the_Wanted_String_From_The_Image_Name == undefined) {
			return undefined;
		}
		let is_This_Image_ForThe_Answer: boolean = false;
		if (the_Wanted_String_From_The_Image_Name.includes("Answer")) {
			is_This_Image_ForThe_Answer = true;
		}
		const just_The_Post_Word_And_Its_Number: string | undefined =
			the_Wanted_String_From_The_Image_Name.match(/post_No_\d+?_/gi)?.[0];
		if (just_The_Post_Word_And_Its_Number == undefined) {
			return undefined;
		}
		const the_Stringified_Number_OfThe_Post: string | undefined =
			just_The_Post_Word_And_Its_Number.match(/\d+/gi)?.[0];
		if (the_Stringified_Number_OfThe_Post == undefined) {
			return undefined;
		}
		const the_Number_OfThe_Post_From_The_Image_Name: number = Number.parseInt(
			the_Stringified_Number_OfThe_Post
		);
		const temp_Obj: T_DataObj_Of__One__Post = {
			name_OfThis_Post: `post_No_${the_Number_OfThe_Post_From_The_Image_Name}`,
			number_OfThis_Post: the_Number_OfThe_Post_From_The_Image_Name,
			the_Relative_Path_OfThe_Top_Post_From_The_PC__V1: null,
			the_Url_OfThe_Top_Post_From_Internet_Site_1: null,
			the_Url_OfThe_Top_Post_From_Internet_Site_2: null,
			is_There_A_Bottom_Post: false,
			the_Relative_Path_OfThe_Bottom_Post_From_The_PC__V1: null,
			the_Url_OfThe_Bottom_Post_From_Internet_Site_1: null,
			the_Url_OfThe_Bottom_Post_From_Internet_Site_2: null,
			the_TextContent_OfThe_Button_Show_Bottom_Post: null,
		};

		if (is_This_Image_ForThe_Answer == true) {
			temp_Obj.is_There_A_Bottom_Post = true;
			temp_Obj.the_TextContent_OfThe_Button_Show_Bottom_Post = "Show The Answer";
			temp_Obj.the_Url_OfThe_Bottom_Post_From_Internet_Site_1 = the_Github_Path_OfThe_Image;
		} else {
			temp_Obj.the_Url_OfThe_Top_Post_From_Internet_Site_1 = the_Github_Path_OfThe_Image;
		}

		return temp_Obj;
	} catch (err: any) {
		return undefined;
	}
}
//-------------------------------------------------------------------------------------------------------------
function insert_The_Data_Of__OnePostDataObj__To_An___ObjOf_DataObjs_Of_Multiple_Posts(
	p_the_ObjOf_DataObjs_Of_Multiple_Posts: T_ObjOf_DataObjs_Of_Posts,
	p_the_DataObj_Of_One_Post: T_DataObj_Of__One__Post
): boolean {
	try {
		//-----------------------------------
		if (Object.values(p_the_ObjOf_DataObjs_Of_Multiple_Posts).length == 0) {
			p_the_ObjOf_DataObjs_Of_Multiple_Posts[p_the_DataObj_Of_One_Post.name_OfThis_Post] =
				p_the_DataObj_Of_One_Post;
			return true;
		}
		//-----------------------------------
		let do_The_Single_Obj_Exist_InThe__ObjOf_Multiple_Objs: boolean = false;
		const temp_1___Arr_Of__i__keys: string[] = Object.keys(
			p_the_ObjOf_DataObjs_Of_Multiple_Posts
		);
		for (let i_key of temp_1___Arr_Of__i__keys) {
			//-------------------
			if (
				p_the_ObjOf_DataObjs_Of_Multiple_Posts[i_key].number_OfThis_Post !=
				p_the_DataObj_Of_One_Post.number_OfThis_Post
			) {
				continue;
			}
			//-------------------
			do_The_Single_Obj_Exist_InThe__ObjOf_Multiple_Objs = true;
			const temp_2___Arr_Of__k__Keys: string[] = Object.keys(p_the_DataObj_Of_One_Post);
			for (let k = 0; k < temp_2___Arr_Of__k__Keys.length; k++) {
				const k_Key: keyof T_DataObj_Of__One__Post = temp_2___Arr_Of__k__Keys[
					k
				] as keyof T_DataObj_Of__One__Post;
				const k_Value: any = p_the_DataObj_Of_One_Post[k_Key];

				// only assign the i_value if it exist not (empty or null or ...etc), to avoid rewrite an existing value.
				if (k_Value) {
					(p_the_ObjOf_DataObjs_Of_Multiple_Posts[i_key][`${k_Key}`] as any) = k_Value;
					continue;
				}
				// I excluded the following conditions from the previous "Existence" condition because their values (0 or false) will be considered not exist
				if (
					// I didn't check for string because I want if the string is empty ==> not be added.
					typeof k_Value == "number" ||
					typeof k_Value == "bigint" ||
					typeof k_Value == "boolean"
				) {
					(p_the_ObjOf_DataObjs_Of_Multiple_Posts[i_key][`${k_Key}`] as
						| number
						| bigint
						| boolean) = k_Value;
					continue;
				}
			}
			break;
			//-------------------
		}
		//-----------------------------------
		if (do_The_Single_Obj_Exist_InThe__ObjOf_Multiple_Objs == false) {
			p_the_ObjOf_DataObjs_Of_Multiple_Posts[p_the_DataObj_Of_One_Post.name_OfThis_Post] =
				p_the_DataObj_Of_One_Post;
		}
		//-----------------------------------
		return true;
	} catch (err: any) {
		return false;
	}
}
//-------------------------------------------------------------------------------------------------------------
export async function does_It_Exist(thePath: string): Promise<boolean> {
	try {
		await fsPromises.stat(thePath);
		return true;
	} catch (err: any) {
		return false;
	}
}
//-------------------------------------------------------------------------------------------------------------

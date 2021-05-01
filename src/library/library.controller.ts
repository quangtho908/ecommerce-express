import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import {diskStorage} from "multer"
import { File } from "./library.model";
import { LibraryService } from "./library.service";

@Controller("upload")
export class LibraryController {

    constructor(private libraryService: LibraryService) {}

    @Get()
    async findAll(): Promise<File[]> {
        return await this.libraryService.findAll();
    }

    @Post()
    @UseInterceptors(FilesInterceptor("files", 20, {
        storage: diskStorage({
            destination: "./uploads",
            filename: function(req, file, cb){
                const time = Date.now()
                cb(null, `${time}_${file.originalname}`)
            }
        })
    }))
    async create(@UploadedFiles() files: Express.Multer.File): Promise<File> {
        return await this.libraryService.create(files);
    }

    async delete(@Body() {id}): Promise<File> {
        return await this.libraryService.delete(id);
    }
}
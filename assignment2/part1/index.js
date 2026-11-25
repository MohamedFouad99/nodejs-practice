
const path = require("path");
const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");
const zlib = require("zlib");
const { pipeline } = require("stream");

// Q1: Get current file path and directory
function getCurrentPath() {
    console.log({
        File: __filename,
        Dir: __dirname
    });
}

// Test Q1:
// getCurrentPath();

// Q2: Get file name
function getFileName(filePath) {
    return path.basename(filePath);
}

// Test Q2:
// console.log(getFileName("/user/files/report.pdf"));

// Q3: Build path from an object
function buildPath({ dir, name, ext }) {
    return path.join(dir, name + ext);
}

// Test Q3:
// console.log(buildPath({
//     dir: "/folder",
//     name: "app",
//     ext: ".js"
// }));

// Q4: Get file extension
function getFileExtension(filePath) {
    return path.extname(filePath);
}

// Test Q4:
// console.log(getFileExtension("/docs/readme.md"));

// Q5: Parse path and return name and extension
function parseFilePath(filePath) {
    const result = path.parse(filePath);

    return {
        Name: result.name,
        Ext: result.ext
    };
}

// Test Q5:
// console.log(parseFilePath("/home/app/main.js"));

// Q6: Check if path is absolute
function isAbsolutePath(filePath) {
    return path.isAbsolute(filePath);
}

// Test Q6:
// console.log(isAbsolutePath("/home/user/file.txt"));

// Q7: Join multiple path segments
function joinSegments(...segments) {
    return path.join(...segments);
}

// Test Q7:
// console.log(joinSegments("src", "components", "App.js"));

// Q8: Resolve relative path to absolute path
function resolvePath(filePath) {
    return path.resolve(filePath);
}

// Test Q8:
// console.log(resolvePath("./index.js"));

// Q9: Join two paths
function joinTwoPaths(path1, path2) {
    return path.join(path1, path2);
}

// Test Q9:
// console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

// Q10: Delete file asynchronously
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(err.message);
            return;
        }

        console.log("File deleted successfully.");
    });
}

// Test Q10:
// deleteFile("./file.txt");

// Q11: Create folder synchronously
function createFolder(folderPath) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log("Success");
}

// Test Q11:
// createFolder("./new-folder");

// Q12: Listen for start event
const startEvent = new EventEmitter();

startEvent.on("start", () => {
    console.log("Welcome event triggered!");
});

// Test Q12:
// startEvent.emit("start");

// Q13: Emit login event with username
const loginEvent = new EventEmitter();

loginEvent.on("login", (username) => {
    console.log(`User logged in: ${username}`);
});

// Test Q13:
// loginEvent.emit("login", "Ahmed");

// Q14: Read file synchronously
function readFile(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    console.log(content);
}

// Test Q14:
// readFile("./notes.txt");

// Q15: Write to file asynchronously
function writeFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.log(err.message);
            return;
        }

        console.log("File written successfully.");
    });
}

// Test Q15:
// writeFile("./async.txt", "Async save");

// Q16: Check if directory exists
function checkDirectory(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        return false;
    }

    return fs.statSync(directoryPath).isDirectory();
}

// Test Q16:
// console.log(checkDirectory("./"));

// Q17: Get OS platform and architecture
function getOSInfo() {
    return {
        Platform: os.platform(),
        Arch: os.arch()
    };
}

// Test Q17:
// console.log(getOSInfo());

// Q18: Read file using readable stream
function readFileStream(filePath) {
    const readableStream = fs.createReadStream(filePath);

    readableStream.on("data", (chunk) => {
        console.log(chunk.toString());
    });

    readableStream.on("error", (err) => {
        console.log(err.message);
    });
}

// Test Q18:
// readFileStream("./big.txt");

// Q19: Copy file using readable and writable streams
function copyFileStream(source, destination) {
    const readableStream = fs.createReadStream(source);
    const writableStream = fs.createWriteStream(destination);

    readableStream.pipe(writableStream);

    writableStream.on("finish", () => {
        console.log("File copied using streams.");
    });

    readableStream.on("error", (err) => {
        console.log(err.message);
    });

    writableStream.on("error", (err) => {
        console.log(err.message);
    });
}

// Test Q19:
// copyFileStream("./source.txt", "./dest.txt");

// Q20: Read, compress and write file using pipeline
function compressFile(source, destination) {
    pipeline(
        fs.createReadStream(source),
        zlib.createGzip(),
        fs.createWriteStream(destination),
        (err) => {
            if (err) {
                console.log(err.message);
                return;
            }

            console.log("File compressed successfully.");
        }
    );
}

// Test Q20:
// compressFile("./data.txt", "./data.txt.gz");

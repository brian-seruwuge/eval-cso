module.exports = {
    branch: "master",
    debug: true,
    fail: [],
    prepare: [
        {
        npmPublish: false,
        path: "@semantic-release/npm",
        },
        {
        message: "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}",
        path: "@semantic-release/git",
        },
    ],
    publish: [],
    success: [],
    verifyConditions: ["@semantic-release/git"],
};
;((collection) => {
  let dbo = conn.db(process.env.SUPRIME_DB_NS)
  dbo.collection(collection).drop(function (err, delOK) {
    if (err) throw err
    if (delOK) console.log(`Collection: ${collection} deleted`)
    conn.db.close()
  })
})()

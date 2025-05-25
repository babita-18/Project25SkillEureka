
router.get('/:id', async (req, res) => {
    try {
      const video = await Video.findById(req.params.id).populate('creator', 'name');
      if (!video) return res.status(404).json({ message: 'Video not found' });
      res.json(video);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching video' });
    }
  });
  